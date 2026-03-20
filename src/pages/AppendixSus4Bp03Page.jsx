import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP03 — 정책으로 데이터셋의 수명 주기 관리</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 중간 수준입니다.</p>
      </div>

      <p>
        모든 데이터의 수명 주기를 관리하고 자동 삭제를 적용하여 워크로드에 필요한 총 스토리지를
        최소화합니다. 데이터셋은 일반적으로 수명 주기 동안 다양한 보존 및 액세스 요구사항을 가지며,
        데이터를 더 에너지 효율적인 스토리지 계층으로 전환하거나 아카이브하거나 삭제하는
        자동화된 수명 주기 정책이 필요합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        활성 데이터 스토리지 및 검색을 최소화하고 효율적인 스토리지 계층화를 통해 에너지 소비를 줄입니다.
        규제 준수 및 데이터 거버넌스를 지원하며 시간이 지남에 따라 데이터 스토리지와 컴퓨팅의 효율성을 개선합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>데이터를 수동으로 삭제하는 경우</li>
        <li>워크로드 데이터를 전혀 삭제하지 않는 경우</li>
        <li>보존 및 액세스 요구사항에 따라 데이터를 더 에너지 효율적인 스토리지 계층으로 이동하지 않는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>워크로드의 효율적인 데이터 액세스 및 보존 보장</li>
        <li>스토리지 요구사항 최소화를 통한 에너지 소비 감소</li>
        <li>규정 준수 및 데이터 거버넌스 지원</li>
        <li>지능적인 계층화를 통한 스토리지 비용 최적화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>워크로드의 데이터셋을 분류합니다(SUS04-BP01 참조).</li>
        <li>각 데이터 클래스에 대한 처리 규칙을 생성합니다.</li>
        <li>수명 주기 규칙을 적용하는 자동화된 수명 주기 정책을 설정합니다.</li>
        <li>미사용 볼륨, 스냅샷, 보존 기간이 지난 데이터를 삭제합니다.</li>
        <li>해당 수명 주기 규칙에 따라 데이터를 압축합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 — S3 Lifecycle, S3 Intelligent-Tiering, S3 Storage Lens</li>
        <li>Amazon EBS — Data Lifecycle Manager(스냅샷 및 AMI)</li>
        <li>Amazon EFS — EFS Lifecycle Management</li>
        <li>Amazon ECR — ECR 수명 주기 정책</li>
        <li>Amazon DynamoDB — Time To Live(TTL)</li>
        <li>Amazon CloudWatch — 로그 보존 설정</li>
        <li>AWS Elemental MediaStore — 객체 수명 주기 정책</li>
      </ul>

      <PageNav />
    </article>
  );
}
