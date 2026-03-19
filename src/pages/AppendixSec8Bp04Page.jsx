import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec8Bp04Page() {
  return (
    <article className="doc-content">
      <h1>SEC08-BP04 — 데이터 무결성 보호</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간입니다.</p>
      </div>
      <p>
        저장된 데이터가 무단으로 변조되거나 삭제되지 않았음을 검증하고 보장합니다. 특히 감사 로그,
        규정 준수 기록, 중요 비즈니스 데이터의 무결성은 보안 사고 조사와 규제 준수에 필수적입니다.
        WORM(Write Once Read Many) 메커니즘과 무결성 검증을 통해 데이터 변조를 방지합니다.
      </p>
      <h2>원하는 결과</h2>
      <p>
        중요 데이터는 생성 후 변경이나 삭제가 방지되고, 데이터 무결성이 주기적으로 검증됩니다.
        감사 로그의 무결성이 보장되어 보안 사고 조사 시 로그의 신뢰성을 확보합니다.
        무결성 위반이 발생하면 자동으로 탐지되고 경보가 발송됩니다.
      </p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>CloudTrail 로그 무결성 검증을 비활성화하여 로그 변조 탐지 불가</li>
        <li>감사 로그를 저장하는 S3 버킷에 Object Lock을 적용하지 않아 로그 삭제 가능</li>
        <li>데이터 체크섬을 저장하지 않아 데이터 무결성 변조 여부를 사후 검증할 수 없음</li>
        <li>버전 관리 없이 S3 버킷을 사용하여 덮어쓰기 또는 삭제된 데이터 복구 불가</li>
        <li>규정 준수 목적의 데이터에 삭제 방지 정책 없이 일반 스토리지와 함께 보관</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>감사 로그 무결성 보장으로 보안 사고 조사 및 법적 증거 자료의 신뢰성 확보</li>
        <li>랜섬웨어 공격으로 인한 데이터 암호화 또는 삭제 시 복구 가능한 버전 유지</li>
        <li>규정 준수(SEC Rule 17a-4, FINRA 등) 요구 사항의 레코드 변경 불가 요건 충족</li>
        <li>데이터 변조 탐지를 통한 내부자 위협 및 외부 공격 조기 발견</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>AWS CloudTrail 로그 파일 무결성 검증을 활성화하여 로그 파일의 SHA-256 해시를 자동으로 생성하고, 로그 변조 여부를 주기적으로 검증합니다.</li>
        <li>감사 로그 및 규정 준수 데이터를 저장하는 S3 버킷에 Object Lock(Compliance 모드)을 활성화하여 보존 기간 내 삭제 및 수정을 방지합니다.</li>
        <li>중요 S3 버킷에 버전 관리(Versioning)를 활성화하여 데이터 변경 이력을 유지하고, 실수나 악의적 삭제로부터 복구 가능하게 합니다.</li>
        <li>AWS Backup으로 중요 데이터의 정기 백업을 수행하고, 백업 볼트 잠금(Vault Lock)을 사용하여 백업 자체도 변경 불가로 설정합니다.</li>
        <li>DynamoDB 스트림과 Lambda를 활용하여 중요 테이블의 변경 사항을 실시간으로 감지하고 변조 의심 이벤트 시 경보를 발송합니다.</li>
        <li>Amazon EventBridge와 CloudWatch를 연동하여 S3 버킷의 Object Lock 설정 변경 시도를 탐지하고 보안 팀에 알림을 발송합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 Object Lock — WORM 스토리지로 데이터 변경 불가 보장</li>
        <li>AWS CloudTrail 로그 무결성 검증 — 감사 로그 변조 탐지</li>
        <li>Amazon S3 버전 관리 — 객체 변경 이력 및 삭제 복구</li>
        <li>AWS Backup Vault Lock — 백업 데이터 변경 불가 보호</li>
        <li>Amazon DynamoDB 스트림 — 테이블 변경 실시간 캡처</li>
      </ul>
      <PageNav />
    </article>
  );
}
