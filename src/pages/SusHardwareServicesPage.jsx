import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function SusHardwareServicesPage() {
  return (
    <article className="doc-content">
      <h1>지속 가능성 — 하드웨어 및 서비스 패턴</h1>

      <p>
        더 에너지 효율적인 하드웨어와 관리형 서비스를 사용하여
        워크로드의 환경적 영향을 최소화합니다.
      </p>

      <h2>모범 사례</h2>

      <h3>SUS05-BP01: 필요한 최소 하드웨어 사용</h3>
      <p>
        작업에 필요한 최소한의 하드웨어 리소스를 사용합니다.
        AWS Compute Optimizer를 활용하여 올바른 인스턴스 크기를 선택합니다.
      </p>

      <h3>SUS05-BP02: 에너지 효율적인 하드웨어 사용</h3>
      <p>
        AWS Graviton 프로세서와 같이 에너지 효율이 높은 하드웨어를 사용합니다.
        Graviton3는 동급 x86 프로세서 대비 최대 60% 적은 에너지를 사용합니다.
      </p>

      <div className="doc-note">
        <div className="doc-note-title">AWS Graviton 프로세서</div>
        <p>
          AWS Graviton 프로세서는 Amazon EC2에서 실행되는 클라우드 워크로드를 위해
          AWS가 설계한 ARM 기반 프로세서입니다. 동일한 성능을 위해
          더 적은 에너지를 소비하므로 지속 가능성을 향상시킵니다.
        </p>
      </div>

      <h3>SUS05-BP03: 관리형 서비스 사용</h3>
      <p>
        AWS 관리형 서비스는 공유 인프라를 통해 규모의 경제를 활용합니다.
        서버리스 서비스(Lambda, Fargate)는 사용하지 않을 때 리소스를 소비하지 않습니다.
      </p>

      <h3>SUS05-BP04: 더 효율적인 새 하드웨어 빠르게 채택</h3>
      <p>
        AWS가 새로운 에너지 효율적인 인스턴스 유형을 출시할 때 신속하게 마이그레이션합니다.
        새로운 인스턴스 세대는 일반적으로 이전 세대보다 더 에너지 효율적입니다.
      </p>

      <h3>SUS05-BP05: 공유 스토리지 액세스 사용</h3>
      <p>
        여러 인스턴스가 스토리지를 공유하여 중복 데이터와 하드웨어를 줄입니다.
        Amazon EFS, Amazon FSx 등의 공유 파일 시스템을 활용합니다.
      </p>

      <h2>관련 AWS 서비스</h2>
      <ul>
        <li>AWS Graviton — ARM 기반 에너지 효율적 프로세서</li>
        <li>AWS Lambda — 서버리스 컴퓨팅</li>
        <li>AWS Fargate — 서버리스 컨테이너</li>
        <li>AWS Compute Optimizer — 최적 인스턴스 크기 추천</li>
      </ul>

      <PageNav />
    </article>
  );
}
