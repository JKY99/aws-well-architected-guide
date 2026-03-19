import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel9Bp02Page() {
  return (
    <article className="doc-content">
      <h1>REL09-BP02 — 안전한 백업 위치 사용</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 원본 데이터와 백업이 동일한 장애 도메인에 있어 재해 발생 시 둘 다 손실될 수 있습니다.</p>
      </div>
      <p>백업 데이터는 원본 데이터와 지리적으로 분리된 위치에 저장해야 합니다. 교차 리전 및 교차 계정 백업 복사를 통해 단일 리전 장애, 계정 침해, 랜섬웨어 공격으로부터 백업을 보호합니다.</p>
      <h2>원하는 결과</h2>
      <p>모든 중요 데이터 백업이 최소 하나의 지리적으로 분리된 위치(다른 리전 또는 다른 계정)에 복사됩니다. 원본 계정이 침해되거나 리전 전체가 장애를 겪더라도 백업에서 데이터를 복구할 수 있습니다.</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>백업과 원본 데이터를 동일한 AWS 계정과 리전에 저장하여 계정 침해 시 모두 손실</li>
        <li>S3 백업 버킷에 삭제 방지 정책 없이 운영하여 랜섬웨어 공격 시 백업도 암호화/삭제됨</li>
        <li>교차 리전 복제 설정 없이 단일 리전 장애 시나리오 미대비</li>
        <li>백업 저장소에 과도한 쓰기 권한 부여로 내부자 위협 노출</li>
        <li>교차 계정 백업 없이 운영 계정 자격증명 탈취 시 백업까지 손실</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>지역 재해(자연재해, AZ 전체 장애) 발생 시에도 백업에서 복구 가능</li>
        <li>랜섬웨어 공격 시 원본은 암호화되어도 격리된 백업 계정의 데이터는 안전하게 보존</li>
        <li>계정 침해 시에도 별도 계정의 백업으로 데이터 복구 가능</li>
        <li>규정 준수 요구사항(오프사이트 백업, 데이터 보존 정책) 충족</li>
        <li>S3 Object Lock으로 지정된 기간 동안 백업 삭제 불가 상태 보장</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS Backup의 교차 리전 복사 기능을 활성화하여 모든 백업 볼트를 보조 리전에 자동 복사</li>
        <li>전용 백업 계정을 AWS Organizations에 생성하고 AWS Backup 교차 계정 기능으로 백업 복사</li>
        <li>Amazon S3 교차 리전 복제(CRR)를 활성화하여 S3 기반 백업을 다른 리전에 자동 복제</li>
        <li>백업 버킷에 S3 Object Lock을 WORM(Write Once Read Many) 모드로 설정하여 랜섬웨어 대응</li>
        <li>백업 계정에는 최소 권한 원칙 적용 — 백업 쓰기는 허용하지만 삭제는 Vault Lock으로 방지</li>
        <li>AWS Backup Vault Lock을 적용하여 백업 보존 정책을 변경 불가능하게 잠금</li>
        <li>교차 계정 백업의 KMS 키를 별도로 관리하여 운영 계정 침해 시에도 백업 복호화 가능</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Backup 교차 계정/리전 — 격리된 위치로 백업 자동 복사</li>
        <li>AWS Backup Vault Lock — 백업 삭제 방지 및 불변성 보장</li>
        <li>Amazon S3 교차 리전 복제 — S3 객체 다른 리전 자동 복제</li>
        <li>Amazon S3 Object Lock — WORM 스토리지로 랜섬웨어 대응</li>
        <li>AWS Organizations — 백업 전용 계정 관리 및 정책 적용</li>
        <li>AWS KMS — 교차 계정 백업 암호화 키 관리</li>
      </ul>
      <PageNav />
    </article>
  );
}
