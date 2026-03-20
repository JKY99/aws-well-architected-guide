import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSus4Bp02Page() {
  return (
    <article className="doc-content">
      <h1>SUS04-BP02 — 데이터 액세스 및 스토리지 패턴을 지원하는 기술 사용</h1>

      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 낮음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 낮은 수준입니다.</p>
      </div>

      <p>
        데이터 액세스 및 저장 방식을 가장 잘 지원하는 스토리지 기술을 사용하여
        워크로드를 지원하는 데 필요한 리소스를 최소화합니다.
      </p>

      <h2>원하는 결과</h2>
      <p>
        비즈니스 요구를 충족하는 데 필요한 클라우드 리소스를 줄이고 클라우드 워크로드의 전반적인
        효율성을 개선합니다. 실제 데이터 액세스 패턴에 맞는 성능 및 비용 최적화를 달성합니다.
      </p>

      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>모든 워크로드가 유사한 데이터 스토리지 및 액세스 패턴을 가진다고 가정하는 경우</li>
        <li>모든 워크로드에 단일 스토리지 계층만 사용하는 경우</li>
        <li>데이터 액세스 패턴이 시간이 지나도 일관하게 유지된다고 가정하는 경우</li>
      </ul>

      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>클라우드 리소스 요구사항 감소</li>
        <li>클라우드 워크로드 효율성 향상</li>
        <li>실제 사용 패턴에 맞는 성능 정렬</li>
        <li>적정 규모 조정을 통한 비용 최적화</li>
      </ul>

      <h2>구현 지침</h2>
      <ul>
        <li>데이터 유형(정형·반정형·비정형), 성장(경계·무경계), 내구성(영구·임시·일시), 액세스 패턴(읽기/쓰기, 빈도, 급격·일관적)을 평가합니다.</li>
        <li>특성에 맞는 스토리지로 데이터를 마이그레이션하고 효율성에 맞게 액세스 패턴 변경을 고려합니다.</li>
        <li>Amazon CloudWatch 지표를 수집·분석하고 임계값에서 자동으로 스토리지를 할당합니다.</li>
        <li>객체 수준에서 S3 스토리지 클래스를 구성하고 S3 Lifecycle 정책으로 자동 전환을 설정합니다.</li>
      </ul>

      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon S3 — 무제한 확장성의 객체 스토리지 (S3 스토리지 클래스, Lifecycle, Intelligent-Tiering)</li>
        <li>Amazon EFS — 자동 확장 공유 파일 시스템</li>
        <li>Amazon FSx — 관리형 파일 시스템 (Windows, Lustre, NetApp ONTAP, OpenZFS)</li>
        <li>Amazon EBS — SSD 기반(트랜잭션) 및 HDD 기반(처리량 집약) 블록 스토리지</li>
        <li>Amazon Aurora / RDS / Redshift — 관계형 데이터베이스</li>
        <li>Amazon DynamoDB — 일반 액세스 패턴에 최적화된 키-값 데이터베이스</li>
      </ul>

      <PageNav />
    </article>
  );
}
